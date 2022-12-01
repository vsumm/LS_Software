from elasticsearch import Elasticsearch, helpers
import csv

es = Elasticsearch(host = "localhost", port = 9200)

with open('fraction_elastic.csv') as f:
    reader = csv.DictReader(f)
    helpers.bulk(es, reader, index='fraction')