from cgitb import text
from fastapi import FastAPI, Header
from pydantic import BaseModel
from elasticsearch import Elasticsearch
from fastapi.middleware.cors import CORSMiddleware
import uuid

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
    "http://localhost:4000",
    "http://localhost:9200"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Text(BaseModel):
    text: str


async def generateUUID():
    return uuid.uuid1()

# POST to create new data


@app.post("/create_fields")
async def createData(company_name: Text, floor: Text, group: Text, camera: Text, videos: Text):
    uid = await generateUUID()

    es = Elasticsearch(
        [{'host': 'localhost', 'port': 9200, "scheme": "http"}])
    res = es.index(index="fraction", id=uid, body={"company_name": company_name.text,
                                                   "floor": floor.text, "group": group.text, "camera": camera.text, "videos": videos.text
                                                   })
    es.indices.refresh(index="fraction")
    return(uid)


@app.get("/get_all")
def getData():
    es = Elasticsearch(
        [{'host': 'localhost', 'port': 9200, "scheme": "http"}])
    es.indices.refresh(index="fraction")
    res = es.search(index="fraction", body={
                    "query":  {"match_all": {}}, "size": 100})
    hits = res.get("hits", {}).get("hits", [])
    return {
        "results": [hit.get("_source") for hit in hits]
    }

# GET specific data using


@app.get("/specific_data")
def getDataFromId(company_name: str):
    es = Elasticsearch(
        [{'host': 'localhost', 'port': 9200, "scheme": "http"}])
    es.indices.refresh(index="fraction")
    res = es.search(index="fraction", body={
                    'query': {'match': {'company_name': company_name}}})
    return res
